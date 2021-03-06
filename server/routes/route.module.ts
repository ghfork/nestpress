import { Module } from '@nestjs/common';
import { NextModule } from '@nestpress/next';
import { AuthModule } from '../logics/auth/auth.module';
import { ArticleModule } from '../logics/article/article.module';
import { ApiAdminAuthController } from './api/admin/auth.controller';
import { ApiAdminMeController } from './api/admin/me.controller';
import { ApiArticleController } from './api/general/article.controller';
import { AdminHomeController } from './admin/home.controller';
import { HomeController } from './general/home.controller';

@Module({
  imports: [
    NextModule,
    AuthModule,
    ArticleModule,
  ],
  controllers: [
    ApiAdminAuthController,
    ApiAdminMeController,
    ApiArticleController,
    AdminHomeController,
    HomeController,
  ],
  providers: [
    ApiAdminMeController,
  ],
})
export class RouteModule {}
