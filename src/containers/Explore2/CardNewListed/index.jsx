import Card from './Card'
import SectionHeading from '../../../components/SectionHeading'
import {Explore2Icon2} from '../../../utils/allImgs'

const CardNewListed = ({data}) => {

  return (
    <div className="col-lg-8">
      <SectionHeading
                      img={Explore2Icon2}
                      text='Latest Items'
                      title='New Listed Items'
      />

      {data && data.map((item , i) => (
        <Card
          path1={item.path1}
          path2={item.path2}
          path3={item.path3}
          img1={item.img1}
          img2={item.img2}
          text1={item.text1}
          text2={item.text2}
          text3={item.text3}
          price={item.price}
        />
      ))}

    </div>
  );
}

export default CardNewListed;