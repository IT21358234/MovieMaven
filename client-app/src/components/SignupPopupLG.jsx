import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox, Link } from "@nextui-org/react";


export default function SignupPopupLG() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <Button auto shadow onPress={handler}>
        Sign Up
      </Button>

      <Modal
        
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text b id="modal-title" size={18}>
            Sign Up
          </Text>
        </Modal.Header>


        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Username"
            contentLeft={<i class="fa-solid fa-user"></i>}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            type="email"
            placeholder="Email"
            contentLeft={<i class="fa-solid fa-envelope"></i>}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<i class="fa-solid fa-lock"></i>}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Confirm Password"
            contentLeft={<i class="fa-solid fa-lock"></i>}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text i size={14}>Accept <Link>T & C</Link></Text>
            </Checkbox>
            <Text i size={14}>Already Have Account? <Link>Sign In</Link></Text>
          </Row>
        </Modal.Body>


        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
