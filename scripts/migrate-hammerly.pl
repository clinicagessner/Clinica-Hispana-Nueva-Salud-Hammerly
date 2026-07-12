#!/usr/bin/env perl
# Migración de contenido Pasadena → Hammerly/Houston (uso único).
# Opera a nivel de bytes: el script está guardado en UTF-8 y los patrones
# con acentos se emparejan como sub-secuencias de bytes UTF-8 (sin decodificar,
# para no arriesgar doble codificación).
use strict;
use warnings;

local $/;
my $t = <STDIN>;

# Redes sociales (antes que los reemplazos genéricos)
$t =~ s{www\.facebook\.com/clinicahispanansaludpasadena}{www.facebook.com/ClinicaHispanaNuevaSaludHammerly}g;
$t =~ s{www\.instagram\.com/clinicahispanansaludpasadena}{www.instagram.com/clinicahispanahammerly}g;

# Dominio y correo
$t =~ s{clinicahispanans4\.com}{clinicahispananhammerly.com}g;
$t =~ s{clinicamolina04\@gmail\.com}{clinicahns4\@gmail.com}g;

# Teléfono
$t =~ s{\+1 \(281\) 747-8817}{+1 (832) 280-9555}g;
$t =~ s{\(281\) 747-8817}{(832) 280-9555}g;
$t =~ s{\+?12817478817}{+18322809555}g;
$t =~ s{281-747-8817}{832-280-9555}g;

# Dirección
$t =~ s{1101 Spencer Hwy Suite H}{8538 Hammerly Blvd Suite B}g;
$t =~ s{1101 Spencer Hwy}{8538 Hammerly Blvd}g;
$t =~ s{Spencer Hwy}{Hammerly Blvd}g;
$t =~ s{South Houston, TX 77587}{Houston, TX 77055}g;
$t =~ s{77587}{77055}g;

# Áreas servidas (bloques completos ES/EN)
$t =~ s{Atendemos a pacientes de Pasadena y South Houston, TX y el área de Houston: South Belt, Genoa, Sagemont, Galena Park, Deer Park, Hobby \(Houston\) y comunidades cercanas}{Atendemos a pacientes de Spring Branch y el oeste de Houston, TX: Memorial, Spring Valley Village, Hilshire Village, Long Point, el corredor de Katy Freeway (I-10) y comunidades cercanas}g;
$t =~ s{We care for patients across Pasadena and South Houston, TX and the greater Houston area: South Belt, Genoa, Sagemont, Galena Park, Deer Park, Hobby \(Houston\) and surrounding communities}{We care for patients across Spring Branch and west Houston, TX: Memorial, Spring Valley Village, Hilshire Village, Long Point, the Katy Freeway (I-10) corridor and surrounding communities}g;

# Horario en texto corrido
$t =~ s{lunes a domingo de 9 AM a 9 PM}{lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM}g;
$t =~ s{Monday through Sunday from 9 AM to 9 PM}{Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM}g;
$t =~ s{lunes a domingo de 9:00 AM a 9:00 PM}{lunes a sábado de 9:00 AM a 9:00 PM y domingo de 9:00 AM a 5:00 PM}g;
$t =~ s{Monday to Sunday from 9:00 AM to 9:00 PM}{Monday to Saturday from 9:00 AM to 9:00 PM and Sunday from 9:00 AM to 5:00 PM}g;
$t =~ s{Lunes a Domingo: 9:00 AM - 9:00 PM}{Lunes a Sábado: 9:00 AM - 9:00 PM · Domingo: 9:00 AM - 5:00 PM}g;
$t =~ s{Monday to Sunday: 9:00 AM - 9:00 PM}{Monday to Saturday: 9:00 AM - 9:00 PM · Sunday: 9:00 AM - 5:00 PM}g;

# Marca y ciudad
$t =~ s{Nueva Salud Pasadena}{Nueva Salud Hammerly}g;
$t =~ s{Pasadena y South Houston}{Spring Branch}g;
$t =~ s{Pasadena and South Houston}{Spring Branch}g;
$t =~ s{South Houston}{Houston}g;
$t =~ s{Pasadena, TX}{Houston, TX}g;
$t =~ s{Pasadena, Texas}{Houston, Texas}g;
$t =~ s{Pasadena}{Houston}g;
$t =~ s{pasadena}{houston}g;

print $t;
