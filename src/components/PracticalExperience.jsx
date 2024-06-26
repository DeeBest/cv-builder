/* eslint-disable react/prop-types */
import { IoAddCircle } from 'react-icons/io5';
import { FaBriefcase } from 'react-icons/fa6';

const PracticalExperience = (props) => {
  return (
    <section className="practical-experience-section">
      <div className="practical-heading-container section-heading-container">
        <FaBriefcase />
        <h3>Experience</h3>
        <IoAddCircle
          className="display-form-icon icon"
          onClick={() => {
            document
              .querySelector('.practicalExperience-form')
              .classList.toggle('active');
          }}
        />
      </div>
      <div className="form-container">
        <form
          className="practicalExperience-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="companyName">Company:</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            placeholder="Company name..."
            value={props.experienceDetails.companyName}
            onChange={(e) =>
              props.setExperienceDetails({
                ...props.experienceDetails,
                companyName: e.target.value,
              })
            }
          />
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            name="position"
            id="position"
            placeholder="Position..."
            value={props.experienceDetails.position}
            onChange={(e) =>
              props.setExperienceDetails({
                ...props.experienceDetails,
                position: e.target.value,
              })
            }
          />
          <label htmlFor="companyLocation">Company Location:</label>
          <input
            type="text"
            name="companyLocation"
            id="companyLocation"
            placeholder="Company Location..."
            value={props.experienceDetails.companyLocation}
            onChange={(e) =>
              props.setExperienceDetails({
                ...props.experienceDetails,
                companyLocation: e.target.value,
              })
            }
          />
          <label htmlFor="durationAtCompany">Duration At Company:</label>
          <input
            type="text"
            name="durationAtCompany"
            id="durationAtCompany"
            placeholder="Duration At Company..."
            value={props.experienceDetails.durationAtCompany}
            onChange={(e) =>
              props.setExperienceDetails({
                ...props.experienceDetails,
                durationAtCompany: e.target.value,
              })
            }
          />
          <label htmlFor="description">Duties Description:</label>
          <textarea
            name="description"
            id="description"
            placeholder="Duties Description..."
            rows="4"
            cols="33"
            value={props.experienceDetails.description}
            onChange={(e) =>
              props.setExperienceDetails({
                ...props.experienceDetails,
                description: e.target.value,
              })
            }
          />
          <button
            onClick={props.handleAddPracticalExperience}
            className="save-education-btn"
          >
            Save
          </button>
        </form>
      </div>
    </section>
  );
};

export default PracticalExperience;
