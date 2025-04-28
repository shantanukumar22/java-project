// package com.example.demo.controllers;

// import com.example.demo.models.QR;
// import com.example.demo.services.QRService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.MediaType;
// import org.springframework.web.bind.annotation.*;
// import org.springframework.web.multipart.MultipartFile;

// import java.io.IOException;
// import java.util.List;

// @RestController
// @RequestMapping("/api/qrs")
// @CrossOrigin(origins = "http://localhost:3000") // Adjust frontend URL if needed
// public class QRController {

//     @Autowired
//     private QRService qrService;

//     // Get all QR codes
//     @GetMapping
//     public List<QR> getAllQRCodes() {
//         return qrService.getAllQRCodes();
//     }

//     // Add a QR code (upload image)
//     @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//     public QR addQR(@RequestParam("file") MultipartFile file) throws IOException {
//         return qrService.addQR(file);
//     }

//     // Mark a QR as used
//     @PutMapping("/{id}/use")
//     public QR markQRAsUsed(@PathVariable Long id) {
//         return qrService.markQRAsUsed(id);
//     }
// }

package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.models.QR;
import com.example.demo.repositories.QRRepository;

@RestController
@RequestMapping("/api/qr")
public class QRController {

    @Autowired
    private QRRepository qrRepository;

    // Upload QR Code
    @PostMapping("/upload")
    public String uploadQR(@RequestParam("file") MultipartFile file) {
        try {
            QR qr = new QR();
            qr.setQrImage(file.getBytes());
            qr.setUsed(false);
            qrRepository.save(qr);

            return "QR uploaded successfully!";
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to upload QR!";
        }
    }

    // Get all QR codes
    @GetMapping("/all")
    public List<QR> getAllQRCodes() {
        return qrRepository.findAll();
    }

    // Mark QR as used
    @PutMapping("/mark-used/{id}")
    public String markQRAsUsed(@PathVariable Long id) {
        QR qr = qrRepository.findById(id).orElse(null);
        if (qr == null) {
            return "QR not found!";
        }

        qr.setUsed(true);
        qrRepository.save(qr);
        return "QR marked as used!";
    }
}