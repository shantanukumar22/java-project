// package com.example.demo.controllers;

// import com.example.demo.models.Request;
// import com.example.demo.services.RequestService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/requests")
// public class RequestController {
//     @Autowired
//     private RequestService requestService;

//     // Add a new request
//     @PostMapping("/add")
//     public ResponseEntity<Request> addRequest(@RequestBody Request request) {
//         return ResponseEntity.ok(requestService.addRequest(request));
//     }
    

//     // Get all requests
//     @GetMapping("/all")
//     public ResponseEntity<List<Request>> getAllRequests() {
//         return ResponseEntity.ok(requestService.getAllRequests());
//     }

//     // Get requests by category
//     @GetMapping("/category/{category}")
//     public ResponseEntity<List<Request>> getRequestsByCategory(@PathVariable String category) {
//         return ResponseEntity.ok(requestService.getRequestsByCategory(category));
//     }

//     // accept 
    
// }



package com.example.demo.controllers;

import com.example.demo.models.Request;
import com.example.demo.repositories.RequestRepository; // Import repository
import com.example.demo.services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/requests")
public class RequestController {
    @Autowired
    private RequestService requestService;

    @Autowired
    private RequestRepository requestRepository; // Inject repository

    // Add a new request
    @PostMapping("/add")
    public ResponseEntity<Request> addRequest(@RequestBody Request request) {
        return ResponseEntity.ok(requestService.addRequest(request));
    }

    // Get all requests
    @GetMapping("/all")
    public ResponseEntity<List<Request>> getAllRequests() {
        return ResponseEntity.ok(requestService.getAllRequests());
    }

    // Get requests by category
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Request>> getRequestsByCategory(@PathVariable String category) {
        return ResponseEntity.ok(requestService.getRequestsByCategory(category));
    }

    // Mark request as fulfilled
    @PutMapping("/{id}/fulfill")
    public ResponseEntity<String> fulfillRequest(@PathVariable Long id) {
        Optional<Request> requestOptional = requestRepository.findById(id);
        if (requestOptional.isPresent()) {
            Request request = requestOptional.get();
            request.setStatus("fulfilled");
            requestRepository.save(request);
            return ResponseEntity.ok("Request marked as fulfilled");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Request not found");
        }
    }
}