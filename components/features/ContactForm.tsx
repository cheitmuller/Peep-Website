'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './ContactForm.module.css';

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000, 'Message is too long'),
  _gotcha: z.string().max(0), // Honeypot field - must be empty
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const SUBJECT_OPTIONS = [
  { value: '', label: 'Select a subject...' },
  { value: 'general', label: 'General Question' },
  { value: 'technical', label: 'Technical Issue / Bug Report' },
  { value: 'feature', label: 'Feature Request' },
  { value: 'privacy', label: 'Privacy / Data Question' },
  { value: 'subscription', label: 'Subscription / Billing' },
  { value: 'other', label: 'Other' },
];

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      _gotcha: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('submitting');
    setErrorMessage('');

    try {
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

      if (!formspreeEndpoint) {
        throw new Error('Form configuration error. Please try again later.');
      }

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          _gotcha: data._gotcha, // Honeypot
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.');
      }

      setSubmitStatus('success');
      reset();

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again or email us directly.');
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
      {/* Name Field */}
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name <span className={styles.required}>*</span>
        </label>
        <input
          id="name"
          type="text"
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          {...register('name')}
          disabled={submitStatus === 'submitting'}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className={styles.errorText} role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email <span className={styles.required}>*</span>
        </label>
        <input
          id="email"
          type="email"
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          {...register('email')}
          disabled={submitStatus === 'submitting'}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className={styles.errorText} role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Subject Field */}
      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.label}>
          Subject <span className={styles.required}>*</span>
        </label>
        <select
          id="subject"
          className={`${styles.select} ${errors.subject ? styles.inputError : ''}`}
          {...register('subject')}
          disabled={submitStatus === 'submitting'}
          aria-invalid={errors.subject ? 'true' : 'false'}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        >
          {SUBJECT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p id="subject-error" className={styles.errorText} role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Message <span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          {...register('message')}
          disabled={submitStatus === 'submitting'}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className={styles.errorText} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot Field (hidden from users, visible to bots) */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="_gotcha">Don't fill this out if you're human:</label>
        <input
          id="_gotcha"
          type="text"
          {...register('_gotcha')}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={styles.submitButton}
        disabled={submitStatus === 'submitting'}
      >
        {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className={styles.successMessage} role="status" aria-live="polite">
          <svg className={styles.successIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="currentColor"/>
          </svg>
          <p>Message sent successfully! We'll get back to you within 24 hours.</p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className={styles.errorMessage} role="alert" aria-live="assertive">
          <svg className={styles.errorIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="currentColor"/>
          </svg>
          <p>{errorMessage || 'Something went wrong. Please try again or email us directly at peepinquiry@gmail.com'}</p>
        </div>
      )}
    </form>
  );
}
