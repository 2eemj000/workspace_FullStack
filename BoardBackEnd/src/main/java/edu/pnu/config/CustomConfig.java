package edu.pnu.config;

import org.springframework.context.annotation.Configuration;
// import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// CORS 설정 
// (보안때문에 브라우저는 기본적으로 다른 출처(Origin)에서의 리소스 접근을 제한함)
// ---> 따로 허용해주는 범위를 명시해줘야함
@Configuration
public class CustomConfig implements WebMvcConfigurer {
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**") 						// 모든 주소에 대해서
				.allowedMethods(CorsConfiguration.ALL)  // 모든 method에 대해서
				.allowedOrigins(CorsConfiguration.ALL); // 모든 origin에 대해서
		
//		registry.addMapping("/board/**") // /board 포함 하부 모든 주소에 대해서
//			.allowedMethods(HttpMethod.GET.name(),
//					HttpMethod.POST.name()) // Get & Post Method에 대해서
//			.allowedOrigins("http://localhost:3000", "http://127.0.0.1:3000");
//		registry.addMapping("/member/**") // /member 포함 하부 모든 주소에 대해서
//			.allowedMethods(HttpMethod.GET.name(),
//					HttpMethod.PUT.name()) // Get & Put Method에 대해서
//			.allowedOrigins("http://localhost:3000");
	}
}
