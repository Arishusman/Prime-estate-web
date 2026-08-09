import {
  FaPhoneAlt,
  FaEnvelope,
  FaStar
} from "react-icons/fa";

function AgentCard({ agent }) {
  return (
    <article className="agent-card">

      <div className="agent-image">

        <img
          src={agent.image}
          alt={agent.name}
          loading="lazy"
        />

      </div>

      <div className="agent-content">

        <span className="agent-role">

          {agent.role}

        </span>

        <h3>

          {agent.name}

        </h3>

        <div className="agent-rating">

          <FaStar />

          <span>

            {agent.rating}

          </span>

          <small>

            ({agent.experience})

          </small>

        </div>

        <div className="agent-contact">

          <a href={`tel:${agent.phone}`}>

            <FaPhoneAlt />

            Call

          </a>

          <a href={`mailto:${agent.email}`}>

            <FaEnvelope />

            Email

          </a>

        </div>

      </div>

    </article>
  );
}

export default AgentCard;