package com.LucasMeira.ecommerce.dao;

import com.LucasMeira.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ProductRepostory extends JpaRepository<Product,Long> {


}
