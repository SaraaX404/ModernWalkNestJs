import {Body, Controller, Get, Param, Post, Request, UseGuards} from '@nestjs/common';
import { ProductService } from '../service/products.service';
import { Product } from '@prisma/client';
import {JwtAuthGuard} from "../../auth/jwt-auth.guard";
import {RolesGuard} from "../../auth/roles.guard";
import {Roles} from "../../auth/roles.decorator";
import {UserRole} from '../../auth/roles.enum'


@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService){}


    @Get()
    @Roles(UserRole.USER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    getAllProducts(@Request() req):Promise<Product[]>{
        return this.productService.getAllProducts();
    }

    @Get(':id')
    @Roles(UserRole.USER)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async getById(@Param('id') id:number):Promise<Product>{
        return this.productService.getProducts(id)
    }

    @Post()
    @Roles(UserRole.ADMIN)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async create(@Body() productData: Product):Promise<Product>{
        return this.productService.createProducts(productData)
    }

}
