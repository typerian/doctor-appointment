import { relations } from "drizzle-orm";
import {
  integer,
  text,
  boolean,
  pgTable,
  pgEnum,
  serial,
  numeric,
  time,
  varchar,
  date,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["user", "admin", "doctor"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  role: roleEnum("role").default("user"),
  email: text("email"),
  username: text("username").unique(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  age: integer("age"),
  phone: text("phone").unique(),
});

export const specialties = pgTable("specialties", {
  id: serial("id").primaryKey(),
  name: text("name"),
});

export const specialtiesRelations = relations(specialties, ({ many }) => ({
  doctors: many(doctors),
}));

export const genderEnum = pgEnum("gender", ["male", "female"]);

export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  userId: integer("user_id"),
  email: text("email"),
  date: date("date"),
  scheduled: boolean("scheduled").default(true),
  note: varchar("note", { length: 500 }),
  doctorId: integer("doctor_id"),
  createAt: date("create_at").defaultNow(),
  diagnosis: varchar("diagnosis", { length: 500 }),
  prescription: varchar("prescription", { length: 500 }),
});

export const doctors = pgTable("doctors", {
  id: serial("id").primaryKey(),
  role: roleEnum("role").default("doctor"),
  firstName: text("first_name"),
  lastName: text("last_name"),
  age: integer("age"),
  phone: text("phone").unique(),
  specialtyId: integer("specialty_id"),
  address: text("address"),
  patientsNumber: integer("patients_number"),
  yearOfExperience: integer("year_of_experience"),
  startTime: text("start_time"),
  endTime: text("end_time"),
  biography: varchar("biography", { length: 700 }),
  gender: genderEnum("gender"),
  image: text("image"),
  active: boolean("active").default(true),
});

export const doctorsRelations = relations(doctors, ({ one, many }) => ({
  specialtly: one(specialties, {
    fields: [doctors.specialtyId],
    references: [specialties.id],
  }),
  appointments: many(appointments),
}));

export const usersRelations = relations(users, ({ many }) => ({
  appointments: many(appointments),
}));

export const appointsmentRelations = relations(appointments, ({ one }) => ({
  doctor: one(doctors, {
    fields: [appointments.doctorId],
    references: [doctors.id],
  }),
  user: one(users, {
    fields: [appointments.userId],
    references: [users.id],
  }),
}));
