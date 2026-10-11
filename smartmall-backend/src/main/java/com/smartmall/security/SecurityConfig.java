package com.smartmall.security;
import org.springframework.context.annotation.*; import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity; import org.springframework.security.config.annotation.web.builders.HttpSecurity; import org.springframework.security.config.http.SessionCreationPolicy; import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; import org.springframework.security.crypto.password.PasswordEncoder; import org.springframework.security.web.SecurityFilterChain; import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter; import org.springframework.web.cors.*;
import java.util.List;
@Configuration @EnableMethodSecurity public class SecurityConfig {
 private final JwtAuthenticationFilter jwt; public SecurityConfig(JwtAuthenticationFilter j){jwt=j;}
 @Bean PasswordEncoder passwordEncoder(){return new BCryptPasswordEncoder();}
 @Bean SecurityFilterChain chain(HttpSecurity http)throws Exception{
  http.csrf(c->c.disable()).cors(c->c.configurationSource(cors())).sessionManagement(s->s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
   .authorizeHttpRequests(a->a.requestMatchers("/api/health","/api/auth/**","/api/stores","/api/stores/*","/api/products","/api/products/*","/api/categories","/api/offers","/api/offers/*").permitAll().anyRequest().authenticated())
   .addFilterBefore(jwt,UsernamePasswordAuthenticationFilter.class); return http.build();
 }
 @Bean CorsConfigurationSource cors(){var c=new CorsConfiguration();c.setAllowedOriginPatterns(List.of("http://localhost:*","https://*.vercel.app"));c.setAllowedMethods(List.of("GET","POST","PUT","PATCH","DELETE","OPTIONS"));c.setAllowedHeaders(List.of("*"));c.setAllowCredentials(true);var s=new UrlBasedCorsConfigurationSource();s.registerCorsConfiguration("/**",c);return s;}
}
