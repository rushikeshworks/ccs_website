import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Solutions from '../pages/Solutions'

// Mock the video element since it may not work in test environment
window.HTMLMediaElement.prototype.play = () => Promise.resolve()
window.HTMLMediaElement.prototype.pause = () => {}
window.HTMLMediaElement.prototype.load = () => {}

describe('Solutions Page - Core Capabilities', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render all four core capability sections', () => {
    render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>
    )

    // Distributed Systems capability
    expect(screen.getByText(/Cloud-Native Architecture & Orchestration/i)).toBeInTheDocument()

    // AI & Machine Learning capability
    expect(screen.getByText(/Intelligent Automation & Analytics/i)).toBeInTheDocument()

    // Cybersecurity capability
    expect(screen.getByText(/Zero Trust & Threat Detection/i)).toBeInTheDocument()

    // Blockchain capability
    expect(screen.getByText(/Immutable Systems & Decentralization/i)).toBeInTheDocument()
  })

  it('should display distributed systems capability with correct description', () => {
    render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>
    )

    const distributedSystemsText = screen.getByText(/multi-region deployment.*failover.*99.99% uptime/i)
    expect(distributedSystemsText).toBeInTheDocument()
  })

  it('should display AI/ML capability emphasizing real-time processing', () => {
    render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>
    )

    const aiText = screen.getByText(/machine learning models.*predictive analytics.*video analytics.*OCR/i)
    expect(aiText).toBeInTheDocument()
  })

  it('should display cybersecurity capability with Zero Trust architecture', () => {
    render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>
    )

    const securityText = screen.getByText(/Zero Trust architecture.*end-to-end encryption.*threat monitoring/i)
    expect(securityText).toBeInTheDocument()
  })

  it('should display blockchain capability for immutable systems', () => {
    render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>
    )

    const blockchainText = screen.getByText(/blockchain-backed.*transparent audit.*decentralized.*smart contract/i)
    expect(blockchainText).toBeInTheDocument()
  })

  it('should render all four example implementation use cases', () => {
    render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>
    )

    expect(screen.getByText(/High-Performance Data Pipeline/i)).toBeInTheDocument()
    expect(screen.getByText(/Enterprise Security & Compliance/i)).toBeInTheDocument()
    expect(screen.getByText(/Scalable Video Intelligence Platform/i)).toBeInTheDocument()
    expect(screen.getByText(/Decentralized Supply Chain Tracking/i)).toBeInTheDocument()
  })

  it('should display capabilities for data pipeline use case', () => {
    render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>
    )

    const useCaseText = screen.getByText(/Real-time ETL system processing millions of records/i)
    expect(useCaseText).toBeInTheDocument()

    expect(screen.getByText(/Distributed Processing/)).toBeInTheDocument()
    expect(screen.getByText(/ML Integration/)).toBeInTheDocument()
    expect(screen.getByText(/Real-time Analytics/)).toBeInTheDocument()
  })

  it('should display capabilities for security use case', () => {
    render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>
    )

    const useCaseText = screen.getByText(/Zero Trust network with continuous monitoring/i)
    expect(useCaseText).toBeInTheDocument()

    expect(screen.getByText(/Zero Trust Architecture/)).toBeInTheDocument()
    expect(screen.getByText(/Threat Detection/)).toBeInTheDocument()
  })

  it('should display capabilities for video intelligence use case', () => {
    render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>
    )

    const useCaseText = screen.getByText(/Process and analyze video streams at scale/i)
    expect(useCaseText).toBeInTheDocument()

    expect(screen.getByText(/Computer Vision/)).toBeInTheDocument()
    expect(screen.getByText(/Video Analytics/)).toBeInTheDocument()
    expect(screen.getByText(/Edge Computing/)).toBeInTheDocument()
  })

  it('should display capabilities for blockchain use case', () => {
    render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>
    )

    const useCaseText = screen.getByText(/Immutable record system with transparent verification/i)
    expect(useCaseText).toBeInTheDocument()

    expect(screen.getByText(/Smart Contracts/)).toBeInTheDocument()
    expect(screen.getByText(/Distributed Ledger/)).toBeInTheDocument()
  })

  it('should render technology foundation section', () => {
    render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>
    )

    expect(screen.getByText(/Technology Foundation/i)).toBeInTheDocument()
  })

  it('should display cloud and infrastructure technologies', () => {
    render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>
    )

    expect(screen.getByText(/Kubernetes/)).toBeInTheDocument()
    expect(screen.getByText(/Docker/)).toBeInTheDocument()
  })

  it('should display AI and data technologies', () => {
    render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>
    )

    expect(screen.getByText(/ML Frameworks/)).toBeInTheDocument()
    expect(screen.getByText(/Real-time Processing/)).toBeInTheDocument()
  })

  it('should display security technologies', () => {
    render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>
    )

    expect(screen.getByText(/Encryption/)).toBeInTheDocument()
    expect(screen.getByText(/Compliance/)).toBeInTheDocument()
  })

  it('should render call-to-action section', () => {
    render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>
    )

    expect(screen.getByText(/Let's architect your next generation platform/i)).toBeInTheDocument()
    expect(screen.getByText(/Start a Consultation/i)).toBeInTheDocument()
  })
})
