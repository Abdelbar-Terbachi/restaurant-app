"use client";
import { Box, Grid, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import { usePathname } from "next/navigation";

const ReservationForm = () => {
  const pathname = usePathname();
  const validationSchema = yup.object({
    fullName: yup.string().min(5).required("Nom complet est obligatoire"),
    date: yup.date().required("La date est obligatoire"),
    hour: yup.string().required("Heure est obligatoire"),
    email: yup
      .string()
      .email("Email invalide")
      .required("Email est obligatoire"),
    phone: yup.string().required("Numéro de téléphone est obligatoire"),
    message: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      date: "",
      hour: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ flexGrow: 1, padding: 2, mt: "5rem", width: "100%" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} mb="2rem">
          <TextField
            fullWidth
            id="fullName"
            name="fullName"
            label="Nom complet"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
        </Grid>
        <Grid item xs={12} md={6} mb="2rem">
          <TextField
            fullWidth
            id="date"
            name="date"
            label="Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formik.values.date}
            onChange={formik.handleChange}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
          />
        </Grid>
        <Grid item xs={12} md={6} mb="2rem">
          <TextField
            fullWidth
            id="hour"
            name="hour"
            label="Heure"
            type="time"
            InputLabelProps={{ shrink: true }}
            value={formik.values.hour}
            onChange={formik.handleChange}
            error={formik.touched.hour && Boolean(formik.errors.hour)}
            helperText={formik.touched.hour && formik.errors.hour}
          />
        </Grid>
        <Grid item xs={12} md={6} mb="2rem">
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12} md={6} mb="2rem">
          <TextField
            fullWidth
            id="phone"
            name="phone"
            label="Numéro de téléphone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </Grid>
        <Grid item xs={12} md={6} mb="2rem">
          <TextField
            fullWidth
            id="message"
            name="message"
            label="Message"
            multiline
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        </Grid>
        <Grid item xs={12} mb="2rem">
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ mt: "1rem" }}
          >
            {pathname === "/contact" ? "Send" : "Réserver"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReservationForm;
