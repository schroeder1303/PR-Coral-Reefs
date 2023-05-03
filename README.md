## Puerto Rico and Purpose
Puerto Rico has been facing significant challenges in recent years, including high rates of unemployment, uncertain status in terms of statehood or independence, lack of federal funding for social services, and a weakened economy due to natural disasters.   Due to the financial and social tolls that have plagued the island, especially since Hurricane Maria in 2017, the government declared a state of emergency in April 2023.  Due to significant damage from hurricanes in recent years, Puerto Rico's coast has decreased significantly.

Short-term solutions, such as beach nourishment, can provide temporary protection against erosion, but may not be sustainable in the long run.  Building bans, such as the one in place in Rincon, Puerto Rico, can be more effective long-term solutions to prevent further development along vulnerable coastal areas.  Other measures, such as bolstering the health of existing coral reefs and introducing artificial coral reefs during non-hurricane seasons, can also protect the shoreline.  Challenges such as lack of funding and support from the federal government, ongoing lawsuits against FEMA, and issues with corruption in infrastructure development make it difficult to rely solely on government-funded solutions. Therefore, local government policies and community engagement are crucial in implementing effective strategies for addressing coastal erosion in Puerto Rico.

Further Reading:                  
<ul>
    <li>Puerto Rico has declared a state of emergency due to coastal erosion. <a href="https://apnews.com/article/puerto-rico-coastal-erosion-state-emergency-1cb74408d61a3feab6480efa69f94d0f">Link</a>.</li>
    <li>Locals resist coastal development of the island. <a href="https://www.theguardian.com/us-news/2022/jul/23/puerto-rico-beach-anti-gentrification-protests">Link.</a></li>
    <li>Government says to find to methods to combat coastal erosion as previous short-term solutions have failed. <a href="https://www.drna.pr.gov/noticias/drna-no-recomienda-soluciones-temporeras-ante-problema-de-erosion-costera/">Link.</a> (In Spanish)</li>
    <li>Puerto Rico groups sue FEMA for ignoring renewable energy sources while rebuilding power grid post Hurricane Maria. <a href="https://www.reuters.com/legal/fema-sued-over-lack-renewables-rebuilding-puerto-ricos-power-grid-2023-04-12/">Link.</a></li>
</ul>


## The Maps
1. The interactive map was made using Leaflet 1.9.3, Bootstrap 5.2.3, and tiles from Open Street Map.  The data was sourced from US Census Data API (accessed April 2023).  The interactive map uses unemployment data from the 2020 ACS 5 year report.  Using Java Script the data is


2. The static map was made using QGIS 3.24 and data sourced from World Resources Institute (accessed April 2023).  The data includes local threats to coral reefs.  Reef polygons are classified by estimated threat from coastal development. The threat to coral reefs from coastal development was based on size of cities, ports, and airports; size and density of hotels; and coastal population pressure (a combination of population density, growth, and tourism growth). Values of 0 indicate low threat, 100 indicate medium threat, 1000 indicate high threat.

    The data contains global data for worldwide coral reefs.  In QGIS the data was overlayed on CartoDb Dark Matter and the features were selected using click-drag area.  The data was unable to be filtered by location.  After saving selected features, it was given a categorized style that showed increased threat level as darkening color.  Then the map was exported as a geoJSON and a print layout was created.  Unfortunately the geoJSON did not have correct coordinates to use that data with a Leaflet map, so the map was added to the index.html as a static image.