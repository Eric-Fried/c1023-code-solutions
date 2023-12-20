select "line1",
  "cities"."name" as "city name",
        "district"
from    "addresses"
join "cities" using ("cityId");
