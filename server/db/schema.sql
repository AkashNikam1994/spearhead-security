-- ─────────────────────────────────────────────────────────────────────────────
-- Spearhead Security — PostgreSQL schema (production)
-- Apply with: psql "$DATABASE_URL" -f server/db/schema.sql
-- The Node stores in src/lib/store.ts fall back to JSON files when DATABASE_URL
-- is not configured. Wire the two saveRecord functions to these tables when a
-- DB is provisioned.
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS enquiries (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name     VARCHAR(120)  NOT NULL,
  company_name  VARCHAR(160)  NOT NULL,
  email         VARCHAR(200)  NOT NULL,
  phone         VARCHAR(20)   NOT NULL,
  city          VARCHAR(100)  NOT NULL,
  service_type  VARCHAR(120)  NOT NULL,
  facility_type VARCHAR(120)  NOT NULL,
  manpower_requirement VARCHAR(120),
  message       VARCHAR(2000),
  consent       BOOLEAN       NOT NULL DEFAULT TRUE,
  status        VARCHAR(24)   NOT NULL DEFAULT 'new',
  source        VARCHAR(24)   NOT NULL DEFAULT 'website',
  created_at    TIMESTAMPTZ   NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_enquiries_created   ON enquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_status    ON enquiries (status);
CREATE INDEX IF NOT EXISTS idx_enquiries_service   ON enquiries (service_type);
CREATE INDEX IF NOT EXISTS idx_enquiries_email     ON enquiries (email);

-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS career_applications (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name           VARCHAR(120) NOT NULL,
  email               VARCHAR(200) NOT NULL,
  phone               VARCHAR(20)  NOT NULL,
  current_location    VARCHAR(120) NOT NULL,
  preferred_position  VARCHAR(80)  NOT NULL,
  experience          VARCHAR(40)  NOT NULL,
  resume_path         VARCHAR(255),
  resume_name         VARCHAR(255),
  resume_size         INTEGER,
  consent             BOOLEAN      NOT NULL DEFAULT TRUE,
  application_status  VARCHAR(24)  NOT NULL DEFAULT 'new',
  created_at          TIMESTAMPTZ  NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_apps_created      ON career_applications (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_apps_status      ON career_applications (application_status);
CREATE INDEX IF NOT EXISTS idx_apps_position    ON career_applications (preferred_position);
CREATE INDEX IF NOT EXISTS idx_apps_email       ON career_applications (email);

-- ─────────────────────────────────────────────────────────────────────────────
-- Content-management-ready tables (optional seeding of the same config data)
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS services (
  id            SERIAL PRIMARY KEY,
  title         VARCHAR(120) NOT NULL,
  slug          VARCHAR(120) UNIQUE NOT NULL,
  description   TEXT,
  image         VARCHAR(255),
  is_active     BOOLEAN      NOT NULL DEFAULT TRUE,
  display_order INTEGER      NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ  NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ  NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_services_active ON services (is_active, display_order);

CREATE TABLE IF NOT EXISTS testimonials (
  id                 SERIAL PRIMARY KEY,
  client_name        VARCHAR(120) NOT NULL,
  client_designation VARCHAR(120),
  company_name       VARCHAR(160) NOT NULL,
  testimonial        TEXT         NOT NULL,
  approved           BOOLEAN      NOT NULL DEFAULT FALSE,
  display_order      INTEGER      NOT NULL DEFAULT 0,
  created_at         TIMESTAMPTZ  NOT NULL DEFAULT now(),
  updated_at         TIMESTAMPTZ  NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials (approved, display_order);
