import * as React from 'react';
import { Html, Head, Body, Container, Section, Text, Hr, Preview } from '@react-email/components';

interface ProposalEmailProps {
  data: {
    name: string;
    email: string;
    company: string;
    phone: string;
    projectType: string;
    services: string[];
    budget: string;
    timeline: string;
    description: string;
    hasDesign: boolean;
    referralSource: string;
  };
}

export const ProposalEmail = ({ data }: ProposalEmailProps) => {
  const isHighPriority = data.budget && (data.budget === '$15K-$50K' || data.budget === '$50K+');

  return (
    <Html>
      <Head />
      <Preview>New Project Proposal from {data.name} via Veltrix</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={logo}>VELTRIX PROPOSAL</Text>
            {isHighPriority && (
              <div style={badgeContainer}>
                <span style={urgentBadge}>HIGH PRIORITY</span>
              </div>
            )}
          </Section>
          
          <Section style={bodySection}>
            <Text style={sectionTitle}>Client Details</Text>
            <Text style={text}><strong>Name:</strong> {data.name}</Text>
            <Text style={text}><strong>Email:</strong> {data.email}</Text>
            <Text style={text}><strong>Company:</strong> {data.company || 'N/A'}</Text>
            <Text style={text}><strong>Phone:</strong> {data.phone || 'N/A'}</Text>
            <Text style={text}><strong>Referral:</strong> {data.referralSource || 'N/A'}</Text>
            
            <Hr style={hr} />
            
            <Text style={sectionTitle}>Project Scope & Timeline</Text>
            <Text style={text}><strong>Project Type:</strong> {data.projectType}</Text>
            <Text style={text}><strong>Budget:</strong> <span style={highlight}>{data.budget}</span></Text>
            <Text style={text}><strong>Timeline:</strong> <span style={highlight}>{data.timeline}</span></Text>
            <Text style={text}><strong>Has Design?:</strong> {data.hasDesign ? 'Yes' : 'No / Partial'}</Text>
            
            <Text style={text}><strong>Services Requested:</strong></Text>
            <ul style={list}>
              {data.services.map((service, index) => (
                <li key={index} style={listItem}>{service}</li>
              ))}
            </ul>

            <Hr style={hr} />
            
            <Text style={sectionTitle}>Project Description</Text>
            <Text style={messageBlock}>{data.description}</Text>
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
  color: '#FB923C',
  letterSpacing: '2px',
  margin: '0',
};

const badgeContainer = {
  marginTop: '10px',
};

const urgentBadge = {
  backgroundColor: 'rgba(251, 146, 60, 0.2)',
  color: '#FB923C',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '12px',
  fontWeight: 'bold',
  border: '1px solid rgba(251, 146, 60, 0.5)',
};

const bodySection = {
  padding: '0 48px',
};

const sectionTitle = {
  color: '#f5f5f5',
  fontSize: '18px',
  fontWeight: 'bold',
  borderBottom: '1px dotted #2a2a2a',
  paddingBottom: '8px',
  marginBottom: '16px',
};

const text = {
  color: '#a0a0a0',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '8px 0',
};

const highlight = {
  color: '#6EE7B7',
  fontWeight: 'bold',
};

const list = {
  margin: '10px 0',
  paddingLeft: '20px',
  color: '#a0a0a0',
};

const listItem = {
  marginBottom: '4px',
  fontSize: '14px',
};

const hr = {
  borderColor: '#1f1f1f',
  margin: '24px 0',
};

const messageBlock = {
  backgroundColor: '#0f0f0f',
  padding: '16px',
  borderRadius: '4px',
  color: '#f5f5f5',
  border: '1px solid #1f1f1f',
  whiteSpace: 'pre-wrap',
  fontSize: '14px',
  lineHeight: '24px'
};

export default ProposalEmail;
