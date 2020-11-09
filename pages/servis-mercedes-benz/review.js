import FetchServ from "../../services/fetchService";
import Review from "../../components/reviews/index";

export default function ReviewVolvo({ json }) {
  return <Review json={json} />;
}
export const getStaticProps = async (id = 1) =>
  FetchServ.getReviewByIdToProps((id = 1));
