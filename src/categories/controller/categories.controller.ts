import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from '../service/categories.service';
import { Category} from '@prisma/client';

@Controller('products')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService){}

    @Get()
    async getAllCategories():Promise<Category[]>{
        return this.categoryService.getAllCategories();
    }

    @Get(':id')
    async getById(@Param('id') id:number):Promise<Category>{
        return this.categoryService.getCategories(id)
    }

    @Post()
    async create(@Body() categoryData: Category):Promise<Category>{
        return this.categoryService.createCategories(categoryData)
    }

}
