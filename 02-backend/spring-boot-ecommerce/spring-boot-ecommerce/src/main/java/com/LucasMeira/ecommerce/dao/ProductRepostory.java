package com.LucasMeira.ecommerce.dao;

import com.LucasMeira.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface ProductRepostory extends JpaRepository<Product,Long> {


}
