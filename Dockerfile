FROM node:22.4

ARG APP_PRIVATE_KEY
ARG CF_API_KEY
ARG CF_EMAIL
ARG CF_ZONE_ID
ARG DISCORD_BOT_TOKEN
ARG DISCORD_ID
ARG DISCORD_OAUTH2
ARG DISCORD_PUB_KEY
ARG GITHUB_ADMIN_TOKEN
ARG GITHUB_APP_CLIENT_ID
ARG GITHUB_APP_SECRET
ARG GITHUB_SPONSOR_WEBHOOK_SECRET
ARG GITHUB_TOKEN
ARG IS_TAMAGUI_DEV
ARG NEXT_PUBLIC_GITHUB_APP_ID
ARG NEXT_PUBLIC_GITHUB_AUTH_CLIENT_ID
ARG NEXT_PUBLIC_IS_TAMAGUI_DEV
ARG NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_URL
ARG POSTMARK_SERVER_TOKEN
ARG SHOULD_UNLOCK_GIT_CRYPT
ARG STRIPE_SECRET_KEY
ARG STRIPE_SIGNING_SIGNATURE_SECRET
ARG STUDIO_JWT_SECRET
ARG SUPABASE_SERVICE_ROLE_KEY
ARG TAKEOUT_RENEWAL_COUPON_ID
ARG TRANSCRYPT_PASSWORD
ARG URL
ARG APP_NAME

# unlock
RUN apt-get update && apt-get install -y git bsdmainutils vim-common

WORKDIR /app
COPY . .

# init git
RUN git config --global user.email "you@example.com" && git init . && git add -A && git commit -m 'add' > /dev/null

# unlock
RUN ./scripts/unlock-repo.sh

RUN corepack enable
RUN corepack prepare yarn@4.3.1 --activate
RUN yarn install --immutable
RUN yarn profile react-19
RUN yarn patch-package
RUN yarn build:js
RUN yarn build:app --app $APP_NAME

EXPOSE 3000

CMD ["yarn", "dev:serve:railway"]