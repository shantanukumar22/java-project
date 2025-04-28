package com.example.demo.controllers;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.models.Event;
import com.example.demo.repositories.EventRepository;

@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    // Upload an event
    @PostMapping("/upload")
    public String uploadEvent(@RequestParam("file") MultipartFile file,
                               @RequestParam("eventName") String eventName,
                               @RequestParam("eventDetails") String eventDetails,
                               @RequestParam("eventDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate eventDate,
                               @RequestParam("hostedByClub") String hostedByClub) {
        try {
            Event event = new Event();
            event.setEventName(eventName);
            event.setEventDetails(eventDetails);
            event.setEventDate(eventDate);
            event.setHostedByClub(hostedByClub);
            event.setEventBannerImage(file.getBytes());

            eventRepository.save(event);
            return "Event uploaded successfully!";
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to upload event!";
        }
    }

    // Get all events
    @GetMapping("/all")
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    // Delete an event
    @DeleteMapping("/delete/{id}")
    public String deleteEvent(@PathVariable Long id) {
        Event event = eventRepository.findById(id).orElse(null);
        if (event == null) {
            return "Event not found!";
        }

        eventRepository.delete(event);
        return "Event deleted successfully!";
    }
}