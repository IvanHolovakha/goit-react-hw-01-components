import { StatisticsItem } from "./StatisticsItem"

export const Statistics = ({title, stats}) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list" style={{display: "flex"}}>
      {stats.map(item => <StatisticsItem key={item.id} data={item}/>)}
      </ul>
    </section>
  )
}

