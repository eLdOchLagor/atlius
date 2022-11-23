const elements = [
    { room: 'K2411', building: 'Kåkenhus', floor: 4, x: 0, y: 0},
    { room: 'K2415', building: 'Kåkenhus', floor: 4, x: 0, y: 0},
    { room: 'K21', building: 'Kåkenhus', floor: 2, x: 0, y: 0},
    { room: 'K22', building: 'Kåkenhus', floor: 2, x: 0, y: 0},
    { room: 'K24', building: 'Kåkenhus', floor: 2, x: 0, y: 0},
    { room: 'K2414', building: 'Kåkenhus', floor: 4, x: 0, y: 0},
    { room: 'K2427', building: 'Kåkenhus', floor: 4, x: 0, y: 0},
    { room: 'K2429', building: 'Kåkenhus', floor: 4, x: 0, y: 0},
    { room: 'K25', building: 'Kåkenhus', floor: 2, x: 0, y: 0},
    { room: 'K501', building: 'Kåkenhus', floor: 5, x: 0, y: 0},
    { room: 'K505', building: 'Kåkenhus', floor: 5, x: 0, y: 0},
    { room: 'K2426', building: 'Kåkenhus', floor: 4, x: 0, y: 0},
    { room: 'K502', building: 'Kåkenhus', floor: 5, x: 0, y: 0},
    { room: 'K1', building: 'Kåkenhus', floor: 2, x: 0, y: 0},
    { room: 'K2', building: 'Kåkenhus', floor: 2, x: 0, y: 0},
    { room: 'K3', building: 'Kåkenhus', floor: 2, x: 0, y: 0},
    { room: 'K52_bild', building: 'Kåkenhus', floor: 5, x: 0, y: 0},
    { room: 'K2511_musik', building: 'Kåkenhus', floor: 5, x: 0, y: 0},
    { room: 'K2528', building: 'Kåkenhus', floor: 5, x: 0, y: 0},
    { room: 'K2515', building: 'Kåkenhus', floor: 5, x: 0, y: 0},
    { room: 'K2516', building: 'Kåkenhus', floor: 5, x: 0, y: 0},
    { room: 'K2517', building: 'Kåkenhus', floor: 5, x: 0, y: 0},
    { room: 'K2525', building: 'Kåkenhus', floor: 5, x: 0, y: 0},
    { room: 'K2526', building: 'Kåkenhus', floor: 5, x: 0, y: 0},
    { room: 'K2527', building: 'Kåkenhus', floor: 5, x: 0, y: 0},
    { room: 'K2529', building: 'Kåkenhus', floor: 5, x: 0, y: 0},
    { room: 'K4', building: 'Kåkenhus', floor: 2, x: 0, y: 0},
    { room: 'K2332', building: 'Kåkenhus', floor: 3, x: 0, y: 0},
    { room: 'K5421', building: 'Kåkenhus', floor: 4, x: 0, y: 0},
    { room: 'K5420_ALC', building: 'Kåkenhus', floor: 4, x: 0, y: 0},
    { room: 'K42_drama', building: 'Kåkenhus', floor: 4, x: 0, y: 0},
    { room: 'K4507', building: 'Kåkenhus', floor: 5, x: 0, y: 0},
    { room: 'K4504', building: 'Kåkenhus', floor: 5, x: 0, y: 0},
    { room: 'K23_musik', building: 'Kåkenhus', floor: 2, x: 0, y: 0},
    { room: 'Färgeriet', building: 'Kåkenhus', floor: 1, x: 0, y: 0},
    { room: 'Utsikten', building: 'Kåkenhus', floor: 8, x: 0, y: 0},
    { room: 'Strömmen', building: 'Kåkenhus', floor: 4, x: 0, y: 0},
    {room: 'TP1', floor: 3, building: 'Täppan', x: 0, y: 0},
    {room: 'TP2', floor: 3, building: 'Täppan', x: 0, y: 0},
    {room: 'TP32', floor: 3, building: 'Täppan', x: 0, y: 0},
    {room: 'TP31', floor: 3, building: 'Täppan', x: 0, y: 0},
    {room: 'TP301', floor: 3, building: 'Täppan', x: 0, y: 0},
    {room: 'TP5002', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP5003', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP5004', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP5015', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP5016', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP5020', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP5021', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP5022', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP5023', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP5024', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP5032', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP5034', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP5050', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TPm51', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TPm52', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TPm53', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TPm55', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP51', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP52', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP53', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP54', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP55', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP56', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP501', floor: 5, building: 'Täppan', x: 0, y: 0},
    {room: 'TP4003', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP4004', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP4005', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP4006', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP4008', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP4009', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP4018', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP4027', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP4028', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP4029', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP4030', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP4031', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP4032', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP4033', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP4034', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP4035', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP4040', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP4041', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP41', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP42', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP43', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP44', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP45', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP401', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP402', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP403', floor: 4, building: 'Täppan', x: 0, y: 0},
    {room: 'TP404', floor: 4, building: 'Täppan', x: 0, y: 0}
  ];