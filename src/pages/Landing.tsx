// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { GraduationCap, Calendar, BookOpen, Users, Award, Clock, Stethoscope, Brain, Heart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, P, Div, Footer } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions to ensure type safety for dynamic IDs
const getStatCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['stat-card-0', 'stat-card-1', 'stat-card-2', 'stat-card-3'];
  return ids[index] || 'noID';
};

const getFeatureCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['feature-card-0', 'feature-card-1', 'feature-card-2', 'feature-card-3'];
  return ids[index] || 'noID';
};

const getDepartmentCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['department-card-0', 'department-card-1', 'department-card-2', 'department-card-3', 'department-card-4', 'department-card-5'];
  return ids[index] || 'noID';
};

const getTestimonialCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['testimonial-card-0', 'testimonial-card-1', 'testimonial-card-2'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-500" />,
      title: "Smart Scheduling",
      description: "Advanced lesson scheduling system with conflict detection and automatic notifications"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      title: "Course Management",
      description: "Comprehensive course catalog with prerequisites, credits, and progress tracking"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Student Portal",
      description: "Centralized dashboard for students to view schedules, grades, and course materials"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: "Progress Tracking",
      description: "Real-time academic progress monitoring with detailed analytics and reports"
    }
  ];

  const stats = [
    { label: "Active Students", value: "2,500+" },
    { label: "Faculty Members", value: "180+" },
    { label: "Courses Offered", value: "120+" },
    { label: "Success Rate", value: "95%" }
  ];

  const departments = [
    { name: "Internal Medicine", icon: <Stethoscope className="w-6 h-6" />, color: "from-red-400 to-red-500" },
    { name: "Surgery", icon: <Heart className="w-6 h-6" />, color: "from-blue-400 to-blue-500" },
    { name: "Pediatrics", icon: <Users className="w-6 h-6" />, color: "from-green-400 to-green-500" },
    { name: "Neurology", icon: <Brain className="w-6 h-6" />, color: "from-purple-400 to-purple-500" },
    { name: "Cardiology", icon: <Heart className="w-6 h-6" />, color: "from-pink-400 to-pink-500" },
    { name: "Emergency Medicine", icon: <Clock className="w-6 h-6" />, color: "from-yellow-400 to-orange-500" }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "4th Year Student",
      content: "The scheduling system has made managing my clinical rotations so much easier. I never miss important lectures anymore!",
      avatar: "SJ"
    },
    {
      name: "Prof. Michael Chen",
      role: "Faculty - Internal Medicine",
      content: "As an instructor, I love how easy it is to coordinate with other departments and track student attendance.",
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      role: "2nd Year Student",
      content: "The course management features help me stay on top of all my prerequisites and plan my academic path effectively.",
      avatar: "ER"
    }
  ];

  return (
    <Container componentId="landing-page-root">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper with medical theme gradient background"
        className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900"
      >
      {/* Header */}
      <Header 
        devId="main-header" 
        devName="Main Header" 
        devDescription="Primary site header with navigation for medical school"
        className="container mx-auto px-4 py-6"
      >
        <Nav 
          devId="main-nav" 
          devName="Main Navigation" 
          devDescription="Primary navigation bar for medical school website"
          className="flex items-center justify-between"
        >
          <Div 
            devId="logo-section" 
            devName="Logo Section" 
            devDescription="Medical school logo and brand name"
            className="flex items-center space-x-2"
          >
            <Div devId="noID" className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </Div>
            <Span 
              devId="brand-name" 
              devName="Brand Name" 
              devDescription="MedSchool Portal brand name"
              className="text-xl font-bold text-white"
            >
              MedSchool Portal
            </Span>
          </Div>
          <Div 
            devId="nav-actions" 
            devName="Navigation Actions" 
            devDescription="Navigation buttons and user menu for medical school"
            className="flex items-center space-x-4"
          >
            <Button 
              devId="academics-button" 
              devName="Academics Button" 
              devDescription="Link to academic information"
              variant="ghost" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Academics
            </Button>
            <Button 
              devId="admissions-button" 
              devName="Admissions Button" 
              devDescription="Link to admissions information"
              variant="ghost" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Admissions
            </Button>
            {isAuthenticated ? (
              <Div 
                devId="user-section" 
                devName="User Section" 
                devDescription="Authenticated user welcome area for medical school"
                className="flex items-center space-x-4"
              >
                <Span 
                  devId="welcome-message" 
                  devName="Welcome Message" 
                  devDescription="Welcome message for authenticated medical school user"
                  className="text-gray-300"
                >
                  Welcome, {user?.name?.split(' ')[0]}!
                </Span>
                <Link to="/dashboard">
                  <Button 
                    devId="nav-dashboard-button"
                    devName="Navigation Dashboard Button"
                    devDescription="Dashboard button for medical school portal access"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Portal
                  </Button>
                </Link>
              </Div>
            ) : (
              <Div 
                devId="auth-buttons" 
                devName="Authentication Buttons" 
                devDescription="Login and register buttons for medical school portal"
                className="flex items-center space-x-2"
              >
                <Link to="/login">
                  <Button 
                    devId="nav-login-button"
                    devName="Navigation Login Button"
                    devDescription="Login button for medical school portal"
                    variant="ghost" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button 
                    devId="nav-register-button"
                    devName="Navigation Register Button"
                    devDescription="Get started button for medical school enrollment"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Enroll Now
                  </Button>
                </Link>
              </Div>
            )}
          </Div>
        </Nav>
      </Header>

      {/* Hero Section */}
      <Container componentId="hero-section">
        <Section 
          devId="hero-content" 
          devName="Hero Content" 
          devDescription="Main hero section for medical school with title and call-to-action"
          className="container mx-auto px-4 py-20 text-center"
        >
          <Div 
            devId="hero-content-wrapper" 
            devName="Hero Content Wrapper" 
            devDescription="Animated wrapper for medical school hero content"
            className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <H1 
              devId="hero-title" 
              devName="Hero Title" 
              devDescription="Main hero title for medical school portal"
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Excellence in 
              <Span 
                devId="medical-highlight" 
                devName="Medical Education Highlight" 
                devDescription="Highlighted medical education text in gradient"
                className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
              >
                {' '}Medical Education
              </Span>
            </H1>
            <P 
              devId="hero-description" 
              devName="Hero Description" 
              devDescription="Hero section description for medical school benefits"
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Advanced lesson scheduling, comprehensive course management, and seamless academic 
              progress tracking for the next generation of medical professionals.
            </P>
            <Div 
              devId="hero-cta-buttons" 
              devName="Hero CTA Buttons" 
              devDescription="Call-to-action buttons for medical school enrollment"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <Button 
                    devId="hero-access-portal"
                    devName="Access Portal Button"
                    devDescription="Primary call-to-action button for accessing medical school portal"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Access Portal
                  </Button>
                </Link>
              ) : (
                <Link to="/register">
                  <Button 
                    devId="hero-access-portal"
                    devName="Access Portal Button"
                    devDescription="Primary call-to-action button for accessing medical school portal"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    Start Learning
                  </Button>
                </Link>
              )}
              <Button 
                devId="hero-learn-more"
                devName="Learn More Button"
                devDescription="Secondary button to learn more about medical school programs"
                variant="outline"
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Learn More
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Stats Section */}
      <Container componentId="stats-section">
        <Section 
          devId="stats-content" 
          devName="Stats Content" 
          devDescription="Statistics section showing medical school metrics"
          className="container mx-auto px-4 py-12"
        >
          <Div 
            devId="stats-grid" 
            devName="Stats Grid" 
            devDescription="Grid container for medical school statistics cards"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                devId={getStatCardId(index)}
                devName={`${stat.label} Stat Card`}
                devDescription={`Statistical card showing ${stat.label}: ${stat.value}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="text-2xl font-bold text-white mb-2">{stat.value}</Div>
                  <Div devId="noID" className="text-gray-400">{stat.label}</Div>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Features Section */}
      <Container componentId="features-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Comprehensive Learning Management</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Everything you need to excel in medical education with cutting-edge technology
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                devId={getFeatureCardId(index)}
                devName={`${feature.title} Feature Card`}
                devDescription={`Feature card highlighting ${feature.title}: ${feature.description}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="mb-4">{feature.icon}</Div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <P devId="noID" className="text-gray-400">{feature.description}</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Departments Section */}
      <Container componentId="departments-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Medical Departments</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive range of medical specialties and departments
            </P>
          </Div>
          <Div devId="noID" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {departments.map((dept, index) => (
              <Div key={index} devId="noID" className="text-center">
                <Div devId={getDepartmentCardId(index)} className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center`}>
                  <span className="text-white">{dept.icon}</span>
                </Div>
                <Badge 
                  devId="noID"
                  className="text-gray-300 font-medium bg-transparent border-none text-center block"
                >
                  {dept.name}
                </Badge>
              </Div>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Testimonials Section */}
      <Container componentId="testimonials-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">What Our Community Says</H2>
            <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
              Hear from students and faculty about their experience with our platform
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                devId={getTestimonialCardId(index)}
                devName={`${testimonial.name} Testimonial Card`}
                devDescription={`Testimonial card from ${testimonial.name}: ${testimonial.content}`}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="flex items-center mb-4">
                    <Div devId="noID" className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </Div>
                    <Div devId="noID">
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <P devId="noID" className="text-gray-400 text-sm">{testimonial.role}</P>
                    </Div>
                  </Div>
                  <P devId="noID" className="text-gray-300 italic">"{testimonial.content}"</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* CTA Section */}
      <Container componentId="cta-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl p-12 text-center border border-blue-500/30">
            <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Ready to Begin Your Medical Journey?</H2>
            <P devId="noID" className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of medical students and faculty using our platform to excel in medical education
            </P>
            <Div devId="noID" className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                devId="cta-enroll-now"
                devName="Enroll Now Button"
                devDescription="Primary CTA button to enroll in medical school"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Enroll Now
                </span>
              </Button>
              <Button 
                devId="cta-schedule-tour"
                devName="Schedule Tour Button"
                devDescription="Secondary CTA button to schedule a campus tour"
                variant="outline"
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule Tour
                </span>
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Footer */}
      <Footer 
        devId="main-footer" 
        devName="Main Footer" 
        devDescription="Medical school site footer with links and copyright"
        className="container mx-auto px-4 py-8 border-t border-white/10"
      >
        <Div devId="noID" className="flex flex-col md:flex-row justify-between items-center">
          <Div devId="noID" className="text-gray-400 mb-4 md:mb-0">
            © 2024 MedSchool Portal. Empowering the next generation of medical professionals.
          </Div>
          <Div devId="noID" className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Academics</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Admissions</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
          </Div>
        </Div>
      </Footer>
      </Div>
    </Container>
  );
};