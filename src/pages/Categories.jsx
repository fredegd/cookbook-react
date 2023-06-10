import Selection from "../components/Selection"
import PageTitle from "../components/PageTitle";

export default function Categories() {
  return(
    <div>
      <PageTitle first={"Categories"}/>
      <Selection keyword={'arabic'} />
      <Selection keyword={'italian'} />
      <Selection keyword={'indian'} />
      <Selection keyword={'dairy'} />
      <Selection keyword={'vegetarian'} />
      <Selection keyword={'salad'} />
      <Selection keyword={'dessert'} />
    </div>
  )
}
