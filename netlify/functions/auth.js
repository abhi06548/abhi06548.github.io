/**
 * Netlify Function to handle GitHub OAuth token exchange
 * This proxy is required because GitHub OAuth requires server-side token exchange
 * 
 * Environment Variables Required:
 * - GITHUB_CLIENT_ID: Your GitHub OAuth App Client ID
 * - GITHUB_CLIENT_SECRET: Your GitHub OAuth App Client Secret
 */

exports.handler = async (event, context) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Get authorization code from query parameters
  const { queryStringParameters } = event;
  const { code } = queryStringParameters || {};

  if (!code) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing code parameter' })
    };
  }

  // Get OAuth credentials from environment variables
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'OAuth credentials not configured',
        hint: 'Please set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET in Netlify environment variables'
      })
    };
  }

  try {
    // Exchange authorization code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code
      })
    });

    const tokenData = await tokenResponse.json();

    // Handle OAuth errors
    if (tokenData.error) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ 
          error: tokenData.error,
          error_description: tokenData.error_description || 'OAuth authentication failed'
        })
      };
    }

    // Return access token
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ token: tokenData.access_token })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      })
    };
  }
};
