package com.example.demo.services;

import com.example.demo.models.QR;
import com.example.demo.repositories.QRRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class QRService {

    @Autowired
    private QRRepository qrRepository;

    // Get all QR codes
    public List<QR> getAllQRCodes() {
        return qrRepository.findAll();
    }

    // Add a QR code (with image upload)
    public QR addQR(MultipartFile file) throws IOException {
        QR qr = new QR();
        qr.setQrImage(file.getBytes());
        qr.setUsed(false);
        return qrRepository.save(qr);
    }

    // Mark a QR as used
    public QR markQRAsUsed(Long id) {
        QR qr = qrRepository.findById(id).orElseThrow(() -> new RuntimeException("QR not found"));
        qr.setUsed(true);
        return qrRepository.save(qr);
    }
}