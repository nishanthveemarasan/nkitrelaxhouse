<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class CholaPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $guards = ['api'];

        $roles = $this->buildRoles();

        foreach ($roles as $roleName => $permissions) {
            $rolePermissions = [];
            foreach ($permissions as $permission) {
                $permission = Permission::firstOrcreate([
                    'guard_name' => $guards[0],
                    'name' => $permission
                ]);
                $rolePermissions[] = $permission;
            }

            $modelRole = Role::firstOrcreate([
                'guard_name' => $guards[0],
                'name' => $roleName
            ]);
            $modelRole->givePermissionTo($rolePermissions);
        }
    }

    private function buildRoles()
    {
        $superAdminPermissions = [
            'view_chola_transport',
            'company_details',
            'bank_details',
            'billing_details',
            'invoices',
            'view_users'
        ];

        $cholaUsersPermissions = [
            'view_eden_bridge',
        ];

        $roles = [
            'super_admin' => array_merge($superAdminPermissions, $cholaUsersPermissions),
            'chola_user' => $cholaUsersPermissions
        ];
        return $roles;
    }
}
