export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { name, mobile, latitude, longitude } = req.body;

  if (!name || !mobile || !latitude || !longitude) {
    return res.status(400).json({ error: 'Missing data' });
  }

  const emergencyData = {
    name,
    mobile,
    latitude,
    longitude,
    time: new Date().toISOString(),
    ip: req.headers['x-forwarded-for'] || 'unknown'
  };

  // 🔴 Emergency data received
  console.log('🚨 EMERGENCY ALERT:', emergencyData);

  return res.status(200).json({ success: true });
}
