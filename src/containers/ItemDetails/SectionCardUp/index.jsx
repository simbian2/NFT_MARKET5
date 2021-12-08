import SectionInfo from './SectionInfo';
import SectionPrice from './SectionPrice';
import SectionForm from './SectionForm';

function SectionCardUp({ img1, img2 }) {
  return (
    <>
      <div className="col-12 mb-30 mt-s">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <SectionInfo img={img1} />
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 mb-30">
        <div className="card">
          <div className="card-body p-3">
            <div className="row align-items-center">
              <SectionPrice img={img2} />

              <SectionForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionCardUp;
