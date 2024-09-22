export const createLocales = `CREATE TABLE public.locales
(
    id bigserial NOT NULL,
    uuid uuid NOT NULL,
    lang character(2) NOT NULL,
    value text,
    PRIMARY KEY (id),
    CONSTRAINT identifier UNIQUE NULLS NOT DISTINCT (uuid, lang)
)`;
