import { useParams } from "react-router";
import styles from "../styles/Detaillooking.module.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const Detaillooking = () => {
  const { id } = useParams();
  const { people } = useSelector((state) => state.getPeople);
  const [isData, setData] = useState(null);
  useEffect(() => {
    const item = people.filter((el) => el.id === +id);
    setData(item[0]);
  }, [id, people]);

  console.log(id, people, isData);

  return (
    <div className={styles.wrapperCard}>
      <div className={styles.leftPart}>
        <div className={styles.image}>
          <img src={isData?.image} alt="" />
        </div>
      </div>

      <div className={styles.rightPart}>
        <div className={styles.textInRight}>
          <h1>{isData?.name}</h1>
          <p>
            {isData?.name} was born/made in "{isData?.bornLocation}", he had {isData?.hairColor}{isData?.eyeColor} {isData?.skinColor} and mass:{isData?.mass} with height: {isData?.height}
          </p>
        </div>
      </div>
    </div>
  );
};
