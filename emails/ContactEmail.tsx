import * as React from 'react';
import { Html, Head, Body, Container, Section, Text, Hr, Preview } from '@react-email/components';

interface ContactEmailProps {
  data: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    service: string;
    budget: string;
    message: string;
  };
}

export const ContactEmail = ({ data }: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Inquiry from {data.name} via Veltrix</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={logo}>VELTRIX</Text>
            <Text style={headerTitle}>New Contact Submission</Text>
          </Section>
          
          <Section style={bodySection}>
            <Text style={text}><strong>Name:</strong> {data.name}</Text>
            <Text style={text}><strong>Email:</strong> {data.email}</Text>
            {data.company && <Text style={text}><strong>Company:</strong> {data.company}</Text>}
            {data.phone && <Text style={text}><strong>Phone:</strong> {data.phone}</Text>}
            <Hr style={hr} />
            <Text style={text}><strong>Service Interest:</strong> <span style={highlight}>{data.service}</span></Text>
            <Text style={text}><strong>Budget Range:</strong> {data.budget}</Text>
            <Hr style={hr} />
            <Text style={text}><strong>Message:</strong></Text>
            <Text style={messageBlock}>{data.message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#080808',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#111111',
  margin: '40px auto',
  padding: '20px 0 48px',
  borderRadius: '8px',
  border: '1px solid #2a2a2a',
  maxWidth: '600px',
};

const header = {
  padding: '0 48px',
  borderBottom: '1px solid #1f1f1f',
  paddingBottom: '20px',
  marginBottom: '20px',
  textAlign: 'center' as const,
};

const logo = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#6EE7B7',
  letterSpacing: '2px',
  margin: '0',
};

const headerTitle = {
  color: '#f5f5f5',
  fontSize: '18px',
  margin: '10px 0 0 0',
};

const bodySection = {
  padding: '0 48px',
};

const text = {
  color: '#a0a0a0',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '10px 0',
};

const highlight = {
  color: '#6EE7B7',
  fontWeight: 'bold',
};

const hr = {
  borderColor: '#1f1f1f',
  margin: '20px 0',
};

const messageBlock = {
  backgroundColor: '#0f0f0f',
  padding: '16px',
  borderRadius: '4px',
  color: '#f5f5f5',
  border: '1px solid #1f1f1f',
  whiteSpace: 'pre-wrap',
};

export default ContactEmail;
