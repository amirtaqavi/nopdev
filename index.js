import template from './template.js';

export default {
  async fetch(request, env) {
    return new Response(template, {
      headers: { 'content-type': 'text/html' },
    })
  }
}
