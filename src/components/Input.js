import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Input({ setCompanies, setType, setShowResult }) {
  const handleChangeCompanies = (e) => {
    setCompanies(e.target.value);
  };
  const handleChangeType = (e) => {
    setType(e.target.value);
  };
  const handleShowResult = (e) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicInput">
        <Form.Label>Company names</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter companies"
          onChange={handleChangeCompanies}
        />
        <Form.Text className="text-muted">
          Seperate the companies with commas
        </Form.Text>
      </Form.Group>
      <Form.Select
        aria-label="Default select example"
        onChange={handleChangeType}
      >
        <option value="Job">Open this select menu</option>
        <option value="Job">Job</option>
        <option value="Internship">Internship</option>
      </Form.Select>
      <Button variant="primary" type="submit" onClick={handleShowResult}>
        Submit
      </Button>
    </Form>
  );
}

export default Input;
