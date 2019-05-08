import React from 'react';
import { Card, Modal } from 'antd';

const ViewRecipeModal = ({modalOpen,recipe,handleCloseModal}) => (
  <Modal title={recipe.title} contered visible={modalOpen}
  onOK={handleCloseModal} onCancel={handleCloseModal}>
  <Card type="inner" title="Ingredients" style={{ marginBottom: '15px' }}>
    {recipe.ingredients}
  </Card>
  <Card type="inner" title="Directions">
    {recipe.directions}
  </Card>
  </Modal>
);

export default ViewRecipeModal;
