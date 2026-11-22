// Free local pickup / delivery area. Anywhere else gets a shipping quote.
// Orders from these ZIPs get the regular $20 / $35 price; anywhere else gets a shipping quote.
export const LOCAL_AREA = 'Fremont, Newark, Union City, Milpitas, San Jose (except the far south), Santa Clara, Sunnyvale, Cupertino and Campbell';
export const LOCAL_ZIPS: string[] = [
  // Fremont
  '94536', '94537', '94538', '94539', '94555',
  // Newark, Union City
  '94560', '94587',
  // Milpitas
  '95035', '95036',
  // Sunnyvale
  '94085', '94086', '94087', '94088', '94089',
  // Santa Clara
  '95050', '95051', '95053', '95054',
  // Cupertino
  '95014', '95015',
  // Campbell
  '95008', '95009', '95011',
  // San Jose (incl. Alviso 95002). Far south San Jose (95119, 95120, 95138, 95139) left out: ~30 mi drive.
  '95002', '95110', '95111', '95112', '95113', '95116', '95117', '95118', '95121', '95122',
  '95123', '95124', '95125', '95126', '95127', '95128', '95129', '95130', '95131', '95132', '95133', '95134',
  '95135', '95136', '95148',
];
