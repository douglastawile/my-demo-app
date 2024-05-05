import { Image, Button, ListGroup, Card } from "react-bootstrap";
import defaultPhoto from "../../assets/default.png";

export default function FindTeacher() {
  return (
    <Card className="shadow-sm my-2">
      <Card.Body>
        <h6 className="fw-bold text-center my-2">Find Teachers</h6>
        <ListGroup>{generateTeacherItems()}</ListGroup>
      </Card.Body>
    </Card>
  );
}

// Helper function to generate teacher items
function generateTeacherItems() {
  const teacherData = [
    { name: "Jone Doe" },
    { name: "Jane Doe" },
    { name: "John Doe" },
    { name: "Abel Shubishon" },
    { name: "Dominic Tawile" },
    { name: "Francis Tawile" },
    { name: "Adwoa Tawile" },
  ];

  return teacherData.map((teacher, index) => (
    <ListGroup.Item key={index}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Image
            src={defaultPhoto}
            alt={teacher.name}
            roundedCircle
            width={50}
            height={50}
            className="me-3"
          />
          <h6>{teacher.name}</h6>
        </div>
        <Button variant="primary" size={"sm"}>
          Follow
        </Button>
      </div>
    </ListGroup.Item>
  ));
}
