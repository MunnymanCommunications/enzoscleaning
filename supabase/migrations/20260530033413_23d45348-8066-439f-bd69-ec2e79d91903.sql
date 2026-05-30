DELETE FROM public.trident_member_events WHERE user_id = '4459ae8b-917f-471f-9435-639f00ea980d';
DELETE FROM public.trident_order_request_items WHERE order_id IN (SELECT id FROM public.trident_order_requests WHERE user_id = '4459ae8b-917f-471f-9435-639f00ea980d');
DELETE FROM public.trident_order_requests WHERE user_id = '4459ae8b-917f-471f-9435-639f00ea980d';
DELETE FROM public.user_roles WHERE user_id = '4459ae8b-917f-471f-9435-639f00ea980d';
DELETE FROM public.trident_members WHERE user_id = '4459ae8b-917f-471f-9435-639f00ea980d';
DELETE FROM auth.identities WHERE user_id = '4459ae8b-917f-471f-9435-639f00ea980d';
DELETE FROM auth.users WHERE id = '4459ae8b-917f-471f-9435-639f00ea980d';