import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Task } from '../../types/Task';

const AccordionHome = ({ tasks }: { tasks: Task[] }) => {
  const categorias = ['PORHACER', 'ENPRODUCCION', 'PORTESTEAR', 'COMPLETADA'];

  return (
    <section className="container-fluid mt-3" id="categorias" style={{ padding: '10px', border: '1px solid #ddd' }}>
      <Accordion  style={{padding: '30px' }}>
        {categorias.map((categoria, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>
              <h4 className="display-9">{categoria}</h4>
            </Accordion.Header>
            <Accordion.Body>
              {tasks
                .filter(task => task.estado === categoria.toUpperCase()) // Filtra las tareas por categoría
                .map(task => (
                  <div key={task.id} style={{ padding: '10px 0', borderTop: '1px solid #ddd' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img src={task.imagen} alt={task.titulo} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                      <span style={{ marginRight: 'auto' }}>{task.titulo}</span>
                      <Link to={`/detalle/${task.id}`} className="btn btn-outline-secondary">
                        Ver detalle
                      </Link>
                    </div>
                  </div>
                ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
};

export default AccordionHome;
