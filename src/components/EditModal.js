import React, { Component } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { toggleModal } from "../actions/editModal";

//TODO: add proptypes
class EditModal extends Component {
  render() {
    return (
      <Modal open={this.props.isOpen} onClose={this.props.toggleModal} basic size="small">
        <Header icon="browser" content="Cookies policy" />
        <Modal.Content>
          <h3>This website uses cookies to ensure the best user experience.</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.props.toggleModal} inverted>
            <Icon name="checkmark" /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = ({ editModal }) => ({
  isOpen: editModal.isOpen,
});

const mapDispatchToProps = dispatch => bindActionCreators({ toggleModal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
