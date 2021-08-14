import { graphql, useStaticQuery } from "gatsby"

const PhotoMonths = () => {
  const dateList = useStaticQuery(
    graphql`
      query {
        allContentfulClassPhotos {
          dates: distinct(field: date)
        }
      }
    `
  )

  const dates = dateList.allContentfulClassPhotos.dates

  var monthsList = []
  dates.forEach(date => {
    monthsList.push(date.substring(0, 7))
  })
  monthsList.sort().reverse()
  const months = [...new Set(monthsList)]

  return months
}

export default PhotoMonths
