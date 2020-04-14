require 'rails_helper'

RSpec.describe "Whiskeys", type: :request do
  include RequestSpecHelper

  let!(:whiskeys) { create_list(:whiskey, 3) }
  let(:whiskey) { whiskeys.first }
  let(:whiskey_id) { whiskey.id }

  describe 'GET /api/whiskeys' do
    before { get '/api/whiskeys' }

    it 'returns whiskeys' do
      expect(data).not_to be_empty
      expect(data.length).to eq(3)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /api/whiskeys/:id' do
    before { get "/api/whiskeys/#{whiskey_id}" }

    it 'returns the requested whiskey' do
      expect(json).not_to be_empty
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    context 'when not found' do
      let(:whiskey_id) { Whiskey.maximum(:id) + 1 }
      before { get "/api/whiskeys/#{whiskey_id}" }

      it 'returns a 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found error message' do
        expect(errors).to include('not found')
      end
    end
  end

  describe 'POST /api/whiskeys/' do
    let(:params) {
      {
        data: {
          name: 'My new whiskey',
          description: 'Better than expected',
          taste: '4',
          color: '3',
          smokiness: '4'
        }
      }
    }

    subject { post "/api/whiskeys", params: params }

    it 'creates the new whiskey' do
      expect { subject }.to change { Whiskey.count }.by(1)
    end

    it 'returns status code 201' do
      subject
      expect(response).to have_http_status(201)
    end

    context 'when invalid' do
      let(:params) { { data: { name: '' } } }

      it 'does not create the new whiskey' do
        expect { subject }.not_to change { Whiskey.count }
      end

      it 'returns status code 422' do
        subject
        expect(response).to have_http_status(422)
      end

      it 'returns error message' do
        subject

        expect(errors).to match(
          a_hash_including('name' => ["can't be blank"])
        )
      end
    end
  end

  describe 'PUT /api/whiskeys/:id' do
    let(:params) {
      {
        data: {
          name: 'My updated whiskey'
        }
      }
    }

    subject { put "/api/whiskeys/#{whiskey_id}", params: params }

    it 'updates the whiskey' do
      expect { subject }.to change { whiskey.reload.name }.to('My updated whiskey')
    end

    it 'returns status code 200' do
      subject
      expect(response).to have_http_status(200)
    end

    context 'when invalid' do
      let(:params) { { data: { name: '' } } }

      it 'does not update the whiskey' do
        expect { subject }.not_to change { whiskey.name }
      end

      it 'returns status code 422' do
        subject
        expect(response).to have_http_status(422)
      end

      it 'returns error message' do
        subject

        expect(errors).to match(
          a_hash_including('name' => ["can't be blank"])
        )
      end
    end
  end

  describe 'DELETE /api/whiskeys/:id' do
    it 'deletes the specified whiskey' do
      delete "/api/whiskeys/#{whiskey_id}"
      expect { whiskey.reload }.to raise_error(ActiveRecord::RecordNotFound)
    end

    it 'returns status code 204' do
      delete "/api/whiskeys/#{whiskey_id}"
      expect(response).to have_http_status(204)
    end

    context 'when not found' do
      let(:whiskey_id) { Whiskey.maximum(:id) + 1 }

      before { delete "/api/whiskeys/#{whiskey_id}" }

      it 'returns a 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found error message' do
        expect(errors).to include('not found')
      end
    end
  end
end
