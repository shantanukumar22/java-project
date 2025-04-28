// package com.example.demo.repositories;
// import com.example.demo.models.QR;
// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;

// @Repository
// public interface QRRepository extends JpaRepository<QR, Long> {
// }
package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.QR;

public interface QRRepository extends JpaRepository<QR, Long> {
}