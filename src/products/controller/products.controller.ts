import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import { ProductService } from '../service/products.service';
import { Product } from '@prisma/client';
import {JwtAuthGuard} from "../../auth/jwt-auth.guard";


@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService){}


    @Get()
    @UseGuards(JwtAuthGuard)
    async getAllProducts():Promise<Product[]>{
        return this.productService.getAllProducts();
    }

    @Get(':id')
    async getById(@Param('id') id:number):Promise<Product>{
        return this.productService.getProducts(id)
    }

    @Post()
    async create(@Body() productData: Product):Promise<Product>{
        return this.productService.createProducts(productData)
    }

}
