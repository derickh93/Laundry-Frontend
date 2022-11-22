import React, { useRef, useState } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function login(user, pass) {
    axios
      .post("http://54.162.191.178:1337/api/auth/local", {
        identifier: user,
        password: pass,
      })
      .then((response) => {
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        sessionStorage.setItem("jwt", response.data.jwt);
        router.push("Orders");
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  }

  async function handleSubmit(e) {
    e.preventDefault();

      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value)
        .then(() => {
          console.log("Logged in");
        })
        .catch((err) => {
          setError(err.message);
        });

    setLoading(false);
  }

  return (
    <div className="homepage">
      <div className="homepage">
        <Image
          src="/washngo.png"
          alt="Wash and Go Logo"
          width={100}
          height={100}
        />{" "}
      </div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button
              style={{ margin: "0px" }}
              disabled={loading}
              className="w-100"
              type="submit"
            >
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
