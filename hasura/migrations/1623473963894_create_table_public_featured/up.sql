CREATE TABLE "public"."featured"("id" UUID NOT NULL DEFAULT gen_random_uuid(), "light" boolean NOT NULL DEFAULT false, "start_date" timestamptz NOT NULL DEFAULT now(), "end_date" timestamptz NOT NULL DEFAULT now() + interval '5 days', "artwork_id" uuid NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("artwork_id") REFERENCES "public"."artworks"("id") ON UPDATE cascade ON DELETE cascade, UNIQUE ("id"));