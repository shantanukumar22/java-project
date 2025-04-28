// // package com.example.demo.config;

// // import com.example.demo.security.JwtAuthenticationFilter;
// // import org.springframework.context.annotation.Bean;
// // import org.springframework.context.annotation.Configuration;
// // import org.springframework.security.authentication.AuthenticationManager;
// // import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
// // import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// // import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// // import org.springframework.security.crypto.password.PasswordEncoder;
// // import org.springframework.security.web.SecurityFilterChain;
// // import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
// // import org.springframework.web.cors.CorsConfiguration;
// // import org.springframework.web.cors.CorsConfigurationSource;
// // import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

// // import java.util.List;

// // @Configuration
// // public class SecurityConfig {

// //     private final JwtAuthenticationFilter jwtAuthFilter;

// //     public SecurityConfig(JwtAuthenticationFilter jwtAuthFilter) {
// //         this.jwtAuthFilter = jwtAuthFilter;
// //     }

// //     // Password Encoder Bean
// //     @Bean
// //     public PasswordEncoder passwordEncoder() {
// //         return new BCryptPasswordEncoder();
// //     }

// //     // Authentication Manager
// //     @Bean
// //     public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
// //         return authConfig.getAuthenticationManager();
// //     }

// //     // Security Filter Chain
// //     @Bean
// //     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
// //         http
// //             .cors().configurationSource(corsConfigurationSource()) // Enable CORS
// //             .and()
// //             .csrf().disable()  // Disable CSRF (for JWT)
// //             .authorizeHttpRequests(auth -> auth
// //                 .requestMatchers("/api/auth/**").permitAll()  // Allow auth APIs
// //                 .anyRequest().authenticated()  // Secure other APIs
// //             )
// //             .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class) // Add JWT Filter
// //             .httpBasic();

// //         return http.build();
// //     }

// //     // CORS Configuration
// //     @Bean
// //     public CorsConfigurationSource corsConfigurationSource() {
// //         CorsConfiguration configuration = new CorsConfiguration();
// //         configuration.setAllowedOrigins(List.of("http://localhost:3000")); // Update with frontend URL
// //         configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
// //         configuration.setAllowedHeaders(List.of("Authorization", "Content-Type"));
// //         configuration.setAllowCredentials(true);

// //         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
// //         source.registerCorsConfiguration("/**", configuration);
// //         return source;
// //     }
// // }


// // package com.example.demo.config;

// // import com.example.demo.security.JwtAuthenticationFilter;
// // import org.springframework.context.annotation.Bean;
// // import org.springframework.context.annotation.Configuration;
// // import org.springframework.security.authentication.AuthenticationManager;
// // import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
// // import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// // import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// // import org.springframework.security.crypto.password.PasswordEncoder;
// // import org.springframework.security.web.SecurityFilterChain;
// // import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
// // import org.springframework.web.cors.CorsConfiguration;
// // import org.springframework.web.cors.CorsConfigurationSource;
// // import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

// // import java.util.List;

// // @Configuration
// // public class SecurityConfig {

// //     private final JwtAuthenticationFilter jwtAuthFilter;

// //     public SecurityConfig(JwtAuthenticationFilter jwtAuthFilter) {
// //         this.jwtAuthFilter = jwtAuthFilter;
// //     }

// //     // 🔹 Password Encoder Bean
// //     @Bean
// //     public PasswordEncoder passwordEncoder() {
// //         return new BCryptPasswordEncoder();
// //     }

// //     // 🔹 Authentication Manager
// //     @Bean
// //     public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
// //         return authConfig.getAuthenticationManager();
// //     }

// //     // 🔹 Security Filter Chain
// //     @Bean
// //     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
// //         http
// //             .cors().and()  // Enable CORS
// //             .csrf().disable()  // Disable CSRF (for JWT)
// //             .authorizeHttpRequests(auth -> auth
// //                 .requestMatchers("/api/auth/**").permitAll()  // Allow auth APIs
// //                 .anyRequest().authenticated()  // Secure other APIs
// //             )
// //             .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class) // Add JWT Filter
// //             .httpBasic();

// //         return http.build();
// //     }

// //     // 🔹 CORS Configuration
// //     @Bean
// //     public CorsConfigurationSource corsConfigurationSource() {
// //         CorsConfiguration configuration = new CorsConfiguration();
// //         configuration.setAllowedOrigins(List.of("http://localhost:5173")); // ✅ Allow Vite frontend
// //         configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
// //         configuration.setAllowedHeaders(List.of("Authorization", "Content-Type"));
// //         configuration.setExposedHeaders(List.of("Authorization")); // Allow frontend to read Authorization header
// //         configuration.setAllowCredentials(true);

// //         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
// //         source.registerCorsConfiguration("/**", configuration);
// //         return source;
// //     }
// // }

// package com.example.demo.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.SecurityFilterChain;
// import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
// import org.springframework.web.cors.CorsConfiguration;
// import org.springframework.web.cors.CorsConfigurationSource;
// import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.socket.config.annotation.EnableWebSocket;
// // import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
// // import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
// import org.springframework.beans.factory.annotation.Autowired;

// import java.util.List;


// // @Configuration
// // public class SecurityConfig {

// //     private final JwtAuthenticationFilter jwtAuthFilter;

// //     public SecurityConfig(JwtAuthenticationFilter jwtAuthFilter) {
// //         this.jwtAuthFilter = jwtAuthFilter;
// //     }

// //     // 🔹 Password Encoder Bean
// //     @Bean
// //     public PasswordEncoder passwordEncoder() {
// //         return new BCryptPasswordEncoder();
// //     }

// //     // 🔹 Authentication Manager
// //     @Bean
// //     public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
// //         return authConfig.getAuthenticationManager();
// //     }

// //     // 🔹 Security Filter Chain
// //     @Bean
// //     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
// //         http
// //             .cors().and()
// //             .csrf().disable()
// //             .authorizeHttpRequests(auth -> auth
// //                 .requestMatchers("/api/auth/**", "/api/qr/**").permitAll() // ✅ Allow QR upload without token
// //                 .anyRequest().authenticated()
// //             )
// //             .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
// //             .httpBasic();

// //         return http.build();
// //     }

// //     // 🔹 CORS Configuration
// //     @Bean
// //     public CorsConfigurationSource corsConfigurationSource() {
// //         CorsConfiguration configuration = new CorsConfiguration();
// //         configuration.setAllowedOrigins(List.of("http://localhost:5173")); // ✅ Allow frontend Vite
// //         configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
// //         configuration.setAllowedHeaders(List.of("Authorization", "Content-Type"));
// //         configuration.setExposedHeaders(List.of("Authorization"));
// //         configuration.setAllowCredentials(true);

// //         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
// //         source.registerCorsConfiguration("/**", configuration);
// //         return source;
// //     }
// // }
// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {

//     private final JwtAuthenticationFilter jwtAuthFilter;

//     public SecurityConfig(JwtAuthenticationFilter jwtAuthFilter) {
//         this.jwtAuthFilter = jwtAuthFilter;
//     }

//     // Password Encoder Bean
//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();
//     }

//     // Authentication Manager
//     @Bean
//     public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
//         return authConfig.getAuthenticationManager();
//     }

//     // Security Filter Chain
//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//         http
//             .cors().and()
//             .csrf().disable()
//             .authorizeHttpRequests(auth -> auth
//                 .anyRequest().permitAll() // <-- Permit ALL requests
//             )
//             .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
//             .httpBasic();

//         return http.build();
//     }

//     // CORS Configuration
//     @Bean
//     public CorsConfigurationSource corsConfigurationSource() {
//         CorsConfiguration configuration = new CorsConfiguration();
//         configuration.setAllowedOrigins(List.of("http://localhost:5173")); // Allow frontend (Vite dev server)
//         configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
//         configuration.setAllowedHeaders(List.of("Authorization", "Content-Type"));
//         configuration.setExposedHeaders(List.of("Authorization"));
//         configuration.setAllowCredentials(true);

//         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//         source.registerCorsConfiguration("/**", configuration);
//         return source;
//     }
// }


package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    // 🔹 Password Encoder Bean
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // 🔹 Authentication Manager
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    // 🔹 Security Filter Chain
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .cors().and()
            .csrf().disable()
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll() // Allow everything for now
            )
            .httpBasic(); // Basic auth (not used now, just kept)

        return http.build();
    }

    // 🔹 CORS Configuration
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:5173")); // Frontend URL
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("Authorization", "Content-Type"));
        configuration.setExposedHeaders(List.of("Authorization"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}