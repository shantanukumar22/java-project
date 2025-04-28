// // src/main/java/com/example/demo/controllers/LostAndFoundController.java

// package com.example.demo.controllers;
// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.multipart.MultipartFile;

// import com.example.demo.models.LostAndFound;
// import com.example.demo.repositories.LostAndFoundRepository;

// @RestController
// @RequestMapping("/api/lost-found")
// public class LostAndFoundController {

//     @Autowired
//     private LostAndFoundRepository lostAndFoundRepository;

//     // Add a new lost or found item
//     @PostMapping("/upload")
//     public String uploadItem(@RequestParam("file") MultipartFile file, 
//                              @RequestParam("itemName") String itemName, 
//                              @RequestParam("description") String description,
//                              @RequestParam("isLost") boolean isLost) {
//         try {
//             LostAndFound item = new LostAndFound();
//             item.setItemName(itemName);
//             item.setDescription(description);
//             item.setItemImage(file.getBytes());
//             item.setLost(isLost);
//             lostAndFoundRepository.save(item);

//             return "Item uploaded successfully!";
//         } catch (Exception e) {
//             e.printStackTrace();
//             return "Failed to upload item!";
//         }
//     }

//     // Get all lost or found items
//     @GetMapping("/all")
//     public List<LostAndFound> getAllItems() {
//         return lostAndFoundRepository.findAll();
//     }

//     // Mark an item as found
//     @PutMapping("/mark-found/{id}")
//     public String markItemAsFound(@PathVariable Long id) {
//         LostAndFound item = lostAndFoundRepository.findById(id).orElse(null);
//         if (item == null) {
//             return "Item not found!";
//         }

//         item.setFound(true);
//         item.setLost(false); // An item can't be both lost and found
//         lostAndFoundRepository.save(item);
//         return "Item marked as found!";
//     }
// }

// src/main/java/com/example/demo/controllers/LostAndFoundController.java

package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.models.LostAndFound;
import com.example.demo.repositories.LostAndFoundRepository;

@RestController
@RequestMapping("/api/lost-found")
public class LostAndFoundController {

    @Autowired
    private LostAndFoundRepository lostAndFoundRepository;

    // Add a new lost or found item
    @PostMapping("/upload")
    public String uploadItem(@RequestParam("file") MultipartFile file, 
                             @RequestParam("itemName") String itemName, 
                             @RequestParam("description") String description,
                             @RequestParam("isLost") boolean isLost) {
        try {
            LostAndFound item = new LostAndFound();
            item.setItemName(itemName);
            item.setDescription(description);
            item.setItemImage(file.getBytes());
            item.setLost(isLost);
            lostAndFoundRepository.save(item);

            return "Item uploaded successfully!";
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to upload item!";
        }
    }

    // Get all lost or found items
    @GetMapping("/all")
    public List<LostAndFound> getAllItems() {
        return lostAndFoundRepository.findAll();
    }

    // Mark an item as found
    @PutMapping("/mark-found/{id}")
    public String markItemAsFound(@PathVariable Long id) {
        LostAndFound item = lostAndFoundRepository.findById(id).orElse(null);
        if (item == null) {
            return "Item not found!";
        }

        item.setFound(true);
        item.setLost(false); // An item can't be both lost and found
        lostAndFoundRepository.save(item);
        return "Item marked as found!";
    }

    // Delete a lost or found item
    @DeleteMapping("/delete/{id}")
    public String deleteItem(@PathVariable Long id) {
        LostAndFound item = lostAndFoundRepository.findById(id).orElse(null);
        if (item == null) {
            return "Item not found!";
        }

        lostAndFoundRepository.delete(item);
        return "Item deleted successfully!";
    }
}