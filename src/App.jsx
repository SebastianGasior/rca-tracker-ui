import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Form, Button, Alert, Spinner } from 'react-bootstrap';

const API_URL = "https://rca-tracker.whiteocean-65212696.westeurope.azurecontainerapps.io";

function App() {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ title: "", severity: "P3", description: "" });
  const [message, setMessage] = useState(null);

  const fetchIncidents = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/incidents`);
      const data = await res.json();
      setIncidents(data);
    } catch (err) {
      console.error(err);
      setMessage({ type: "danger", text: "Failed to fetch incidents" });
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/incidents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMessage({ type: "success", text: "Incident added successfully" });
        setForm({ title: "", severity: "P3", description: "" });
        fetchIncidents();
      } else {
        setMessage({ type: "danger", text: "Failed to add incident" });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "danger", text: "Network error" });
    }
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h1 className="text-center mb-4">RCA Tracker Dashboard</h1>
          {message && (
            <Alert variant={message.type} onClose={() => setMessage(null)} dismissible>
              {message.text}
            </Alert>
          )}
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <h4>Add New Incident</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="severity">
              <Form.Label>Severity</Form.Label>
              <Form.Select
                value={form.severity}
                onChange={(e) => setForm({ ...form, severity: e.target.value })}
              >
                <option>P1</option>
                <option>P2</option>
                <option>P3</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </Form.Group>

            <Button type="submit" variant="primary">
              Add Incident
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <h4>Current Incidents</h4>
          {loading ? (
            <Spinner animation="border" />
          ) : (
            <Table bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Severity</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {incidents.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center">No incidents yet</td>
                  </tr>
                ) : (
                  incidents.map((inc) => (
                    <tr key={inc.id}>
                      <td>{inc.id}</td>
                      <td>{inc.title}</td>
                      <td>{inc.severity}</td>
                      <td>{inc.description}</td>
                    </tr>
                )))
                }
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
