import { GraphQLModule } from '@nestjs/graphql';
import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import config from 'src/common/configs/config';
import { loggingMiddleware } from 'src/common/middleware/logging.middleware';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GqlConfigService } from './gql-config.service';
import { HasuraModule } from '@golevelup/nestjs-hasura';
import { TasksModule } from './tasks/tasks.module';
import * as path from 'path';

@Module({
  imports: [
    HasuraModule.forRoot(HasuraModule, {
      webhookConfig: {
        secretFactory: 'topsecret',
        secretHeader: 'x-hasura-secret',
      },
      managedMetaDataConfig: {
        dirPath: path.join(__dirname, '..', './hasura/metadata'),
        secretHeaderEnvName: 'HASURA_NESTJS_WEBHOOK_SECRET_HEADER_VALUE',
        nestEndpointEnvName: 'NESTJS_EVENT_WEBHOOK_ENDPOINT',
        metadataVersion: 'v3',
        defaultEventRetryConfig: {
          intervalInSeconds: 15,
          numRetries: 3,
          timeoutInSeconds: 100,
          toleranceSeconds: 21600,
        },
      },
    }),
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [loggingMiddleware(new Logger('PrismaMiddleware'))], // configure your prisma middleware
      },
    }),

    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),
    AuthModule,
    UsersModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
